;; Simple Token Sender Contract (With Total Supply)

(define-map balances { user: principal } { amount: uint })

;; NEW: Track total token supply
(define-data-var total-supply uint u0)

;; Error codes
(define-constant err-insufficient-balance (err u101))
(define-constant err-zero-amount (err u102))
(define-constant err-self-transfer (err u103))

;; Deposit tokens (mint-like behavior)
(define-public (deposit (amount uint))
  (if (is-eq amount u0)
      err-zero-amount
      (let (
            (current (default-to u0
                      (get amount (map-get? balances { user: tx-sender }))))
           )
        ;; Update user balance
        (map-set balances
          { user: tx-sender }
          { amount: (+ current amount) })

        ;; NEW: Increase total supply
        (var-set total-supply
          (+ (var-get total-supply) amount))

        (ok "Deposited")
      )
  )
)

;; Send tokens to another user
(define-public (send-tokens (to principal) (amount uint))
  (if (is-eq amount u0)
      err-zero-amount
      (if (is-eq to tx-sender)
          err-self-transfer
          (let (
                (current (default-to u0
                          (get amount (map-get? balances { user: tx-sender }))))
               )
            (if (>= current amount)
                (begin
                  ;; Deduct from sender
                  (map-set balances
                    { user: tx-sender }
                    { amount: (- current amount) })

                  ;; Add to recipient
                  (let (
                        (to-current (default-to u0
                                      (get amount
                                        (map-get? balances { user: to }))))
                       )
                    (map-set balances
                      { user: to }
                      { amount: (+ to-current amount) })
                  )

                  (ok "Tokens sent")
                )
                err-insufficient-balance
            )
          )
      )
  )
)

;; Check balance
(define-read-only (get-balance (user principal))
  (default-to u0
    (get amount (map-get? balances { user })))
)

;; NEW: Read total supply
(define-read-only (get-total-supply)
  (var-get total-supply)
)
