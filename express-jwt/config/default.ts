export default {
  port: 4000,
  origin: "http://localhost:3000",
  dbUri: "mongodb://localhost:27017/rest-user",
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC1z6bTZHcNtHPrlgX/jBpXjYTD
InX2O3NsH8TR7Hzv812XtKgUDFf4P4AC0Sq3i8a/A3bC9kFPOV7JxGKgdyI3ZjV/
9U6JJMBcJnue8xOvvcXM9vnqIFBTbqtquzrkozaJ5H37YMGeh413t1m6/RMKUKk5
MwS/Up4c+WFFBM7cuwIDAQAB
-----END PUBLIC KEY-----`,
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXwIBAAKBgQC1z6bTZHcNtHPrlgX/jBpXjYTDInX2O3NsH8TR7Hzv812XtKgU
DFf4P4AC0Sq3i8a/A3bC9kFPOV7JxGKgdyI3ZjV/9U6JJMBcJnue8xOvvcXM9vnq
IFBTbqtquzrkozaJ5H37YMGeh413t1m6/RMKUKk5MwS/Up4c+WFFBM7cuwIDAQAB
AoGBAICrRciDaFI1rHhFA1e4oofl6thi0hMCPgx+az+Z203B8THFM9KEbdmNrx3P
RCkD7hMO84TE3LGhy3iF2LrxtS9Icr/KszSV9q41zao7tCYzGRaB8gpMYk0QWOPY
iCkRt8w++Z6JnWb3mYblGzHMMWzXfZhomibhvWgEl0zcgxbZAkEA2OUe2MM7Ji0g
oUBYwdKlXEA/TlCgvkDRok069ZCIUEEkVriEg7b8kTv9sQBryQlSNJcRaQoZ/b72
grEVmDf7XwJBANaXOIeW4gxxtMJWsHlQh1/MSyBnYejMoVmHiDmvc6qs3A8J77kB
SltM4yEReqf6uPXKb4IfhNmQfkBV/+b9eCUCQQDBbxWjm/oUggqnxQtjUMnJDENp
RN8Wzhgn91ityMjJSk9uSAFmtrtpi2clhIqcMIPwAwqz8x5a/wQ6alQn/UVhAkEA
wKprFcnRUOzyJx4gOfukX82TkhdgH91B7Jk0JN6zUgT7WwFH22oeMZT5xCHmZ1VD
pWLI9SKJa7FAuVC9fs4KhQJBAICYLj2m6IiuJXRr+0Q6oqYnB1RZDrhgIITQLKYL
U97UrkPl2U6SV5bjmuKZKZiDAKmDMYeNFxpiy4L+/3l0ghg=
-----END RSA PRIVATE KEY-----`,
}
