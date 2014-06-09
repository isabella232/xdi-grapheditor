var testData = 
"[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0$to[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0$from$do/$all/\n[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0$to$anon$from$public$do/$get/[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0$publi\n[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0$to$anon$from$public$do/$get/[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0$msg$sig$keypair<$public><$key>\n[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0$to$anon$from$public$do/$get/[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0$msg$encrypt$keypair<$public><$key>\n[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0$to$anon$from$public$do/$get/[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0<$https><$connect><$xdi><$uri>\n[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0$msg$sig$keypair<$public><$key>&/&/\"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAlvAX4how/q0NCwfuf+C93THCqaYw+eCdeKTAcnTKkgoVjFKGjKpkxZQBv+pL2js+9Ox9tWrf0j14QkYTkkJP+dDhoID5gyVNTEHTjhv6zIt4M7vHuS0lnPLm2g1krxf2igF4Z6lAU6wRJLniMrO0D54r0iGL2bjhVe3SbG/bvVXLAIAWZt6WlEexdj1Qc82cRgeFPRD6hJyLDJGVCn7uzo+uk0Iln8PPBiuusW19Uon4rn1zsTc74VBFkYnWgXXlN+gsGTvfJQ7YfYSjJ6fSOGE6IcbD++Kkoc2VfuWsjI6iYGgn28FH8lV3PGb++kkTcLzRDlVNFkjK+6hTrb8JaQIDAQAB\"\n[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0$msg$sig$keypair<$private><$key>&/&/\"MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCW8BfiGjD+rQ0LB+5/4L3dMcKppjD54J14pMBydMqSChWMUoaMqmTFlAG/6kvaOz707H21at/SPXhCRhOSQk/50OGggPmDJU1MQdOOG/rMi3gzu8e5LSWc8ubaDWSvF/aKAXhnqUBTrBEkueIys7QPnivSIYvZuOFV7dJsb9u9VcsAgBZm3paUR7F2PVBzzZxGB4U9EPqEnIsMkZUKfu7Oj66TQiWfw88GK66xbX1SifiufXOxNzvhUEWRidaBdeU36CwZO98lDth9hKMnp9I4YTohxsP74qShzZV+5ayMjqJgaCfbwUfyVXc8Zv76SRNwvNEOVU0WSMr7qFOtvwlpAgMBAAECggEASAIvQr1AFqA0ksir7fIoYni05/7TasLQHZhr/67cXaPV9+X/LuizvtcHpql+mpSdSnfw2TYtpb2Ru/x2pdZhFUuj+NDPONP49qKI7UlH84GuTPAPLrbtNN1laS3ulOIXyms9KCdE+yYh36WW1p2JD9JkEZHTiIF9b2NQek87RC4HTn6yRxyuY5CA73G1QA9+NfgTlWVixZKMNvhZqIplzyehxh/GSxui45LVtcL+GSa+Ck74iq1XcgCQSZePt4CxkhXEZ0cI99KH29jTgptSv6D/8JNf8rcinn4yWIY2gnM5tgBFRrJ0g+D/9dmYH8erviJPwQCyG1M58nabVQnzCQKBgQDa8Sjjc1vWd9LGvpm3CQqPAjgqVrOEm/ZiSLWb6QUsr7r94+hPWhys/epQ4i+nJ7dqh5zb7uERjEublldg51s0xnnt8mBVAey/AgYyYX8nBG6EoLtpeeZqHtrcfuILoDJMhOlvINJa4s6nzKZZho+CKE11GQlqPnlw2VOPOt+UEwKBgQCwfEmeCG5RWDAJdG2izVp5k942H+J6dA9sZnsbM30DoGY2cWfZ4kUTZh9klYtkhPJtyPikQbDR3CqFpHkcBMWLKnKgoE3B7ARZABTnqmloJ0JQfIOQCfWid4tFYd7KmAMWQsayxybWvOpkSK8Xg2oVjOaoD7CzocahPVR5ayZEEwKBgHjI0FDipEimJA7mubCDeWK5y7h3ymOfEwbXq/EOVX94lwVYBSI5yVYaYnkqvzVNMN/BXuTqXRosNs3n296m4+cyk7OUolZjUHNzr2194gLpa/sZHSssR9RFn2JDUXsubnFOZeWbytC/DVj/Csqa9HLOvySZolsNijuaeYGr7gonAoGBAIDhUpVgjMdEglf1OTchhYexTx3xbN+Fr9m2gQIdOJcUZHAvouo/Tbhb5GL8vj2axLsdf03cVvb6M+dCc9rdNTFqvyjDx+TsqUQhRiLjlHQl70x9kUn3q/SIHiF91kfWeLKh8x6NRrScYwL2/T5LjoXMToi+ZIjZhActlWnRsLEXAoGBAIhnzempFIhP4vIYq9RNCGGwfW5qZ7MbQLq/ES8XwUX2KoL3Pcy503/uEw+gLZwP8hVnOVfba1SGrq0zF0V/hBgDO7PdyQ0KaSDQWQ5oSe1+KMpwq2zY/ulI2D6vaEZy/X1dRYyBJSqJUo0rC+s1sa3O0AUbzcc2CVI8oxgHp7cN\"\n[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0$msg$sig$keypair/$is#/$rsa$2048\n[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0$msg$encrypt$keypair<$public><$key>&/&/\"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAiUG1BhNKgdRH6G1z8084SUBvkb9Hyn9hTJjLv2N3EC8hCsAirbPAuDIEBUSe2PVQbR4Rd1zscNiWCfFOYtM2wZNFA59y/d7Dpn6lnQpRJsVpkXCPeaYl3jgydB5Nm093aN/WVAuDb1a+S8PDrZJY33PeHB9QxvUOaAO4UvTd/wMvbg1uuBUV1rOJmt8qcEjrxzafThyFYD0F5Ni8CiZ50D8XoGSBoU2+8DID6IO/noylQ037mut7E3cInZOgcSL2JlXKf6XlSVM1+JOGbpZzvXIjCMU4OVNmWUWa4WHLUmFYHwJSgZc0ITEi4+ylG1rRsovGydqOOh3tJ0azDo6yvQIDAQAB\"\n[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0$msg$encrypt$keypair<$private><$key>&/&/\"MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCJQbUGE0qB1EfobXPzTzhJQG+Rv0fKf2FMmMu/Y3cQLyEKwCKts8C4MgQFRJ7Y9VBtHhF3XOxw2JYJ8U5i0zbBk0UDn3L93sOmfqWdClEmxWmRcI95piXeODJ0Hk2bT3do39ZUC4NvVr5Lw8Otkljfc94cH1DG9Q5oA7hS9N3/Ay9uDW64FRXWs4ma3ypwSOvHNp9OHIVgPQXk2LwKJnnQPxegZIGhTb7wMgPog7+ejKVDTfua63sTdwidk6BxIvYmVcp/peVJUzX4k4ZulnO9ciMIxTg5U2ZZRZrhYctSYVgfAlKBlzQhMSLj7KUbWtGyi8bJ2o46He0nRrMOjrK9AgMBAAECggEAebs43aaGUhb/n3hTedssxGrNiKno9gN7O//X1GpW0pe56lr1ZrEhnztcrX9qkmkfZ2dffkl/uaWdjDvjlWpWCeCfONNVnSrQwv1XzKu1xXkYY9E8rltZAnk85hdqJPCZqv26jNeZPknkhDWfenVtNOECgFaVwZ7dpAqIk6pwqRXP676OOk0k+BtmqjGbk7dCxvw2x3xw9bhBuUV07v5vUmFekd2SkP65f7qdLutsKcy/Nc2hKAOsBx9XFAfTVObPuBSJ51CwCo6b5OqhLdqPVexn9WrGTwOLh8s2c5KCpP5rnsRx1Xn1LD+4acuR1tp0XN/dvqeZDYUoF59r7eg/0QKBgQDPYwL5gKt5uiarmaVq6lyW4jy86kdA06MQrttXQL4Zln4Qgy2kXCL4HEqcTS5ubKURA2bngISThfSXxrwpXFjNwffxs47BSAKvkkvsE7DMga40ofqVxwU37FUmxKzNUtEg535cLs3vb1wQroX7qc6P3p1QeagZlnCCIIMPPj0YHwKBgQCpbkl3jkmIEy0WEwSfoS69F5P6Fjs8ZoHKAYvNzX9tT9NhjFPKVnG2HZRwmkGE5Z3l8smA2Ui1OZCc+U5r347It1yNUxB3aOTRgUs5Ea4MEu3aRjjr3k9nQzV8l20jYoQlHlJ4006M/LhsEZ60bRtinfNQJIRy4+syEMpss0jJowKBgQCFDFNzOG5KaPe4LZlnTzXZgwlOdcsCtwQthtCnWJzdE6SK+W2FvaqdnKDtR8LbCw6XLKSPLu9fKZhy6wf6TQmX77IfOYADViyK8QOOUE+j1CqsD6MRBh698vvqJFFsZI5QWtPBVjG+Q6Y/+Ydxnk4sFLi+UV5cFBzYDv2mANr3JwKBgHq7AgrRjiA8y88Ora24QzQETVO+IOCq3F9o6U2GC0UyqsshrFyIa8xg9vLuOoG7FrrIOQDV5J4p+cBLs2vev/5THH7e6bGl0QKV5tiLHwlt+M/BSGBLZDdH7wm2Yv9b0J9WrKULY/4q3qihxtWpp0mzYtnt6eeTg/57PTaqVBKDAoGAO9hmltR78t4SpgWFk5VyfwDZ3VOPka9SqSfevc+o2SAgt6GEwLe5tVCURMYpuFF3/wGPTTNRf3AsMj7g+mHOH0Zl/cL39DoOMHhFuZCySq37tkVqTuaatbjl6RjqqXFmxAap4r3PKl6YUNMTSwihcl+Zst/wfxonw/DIAOmrAwk=\"\n[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0$msg$encrypt$keypair/$is#/$rsa$2048\n[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0<$https><$connect><$xdi><$uri>&/&/\"https://respectconnectote.neustar.biz/%5B%3D%5D%21%3Auuid%3Af642b891-4130-404a-925e-a65735bceed0/connect/request\"\n[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0/$is$ref/=debish001\n([=]!:uuid:f642b891-4130-404a-925e-a65735bceed0)/$ref/\n[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0$to[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0$from$do$if$and/$true/({$from}/$is/[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0)\n[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0$to[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0$from$do$if$and$or/$true/({$msg}<$secret><$token><$valid>&/&/true)\n[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0$to[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0$from$do$if$and$or/$true/({$msg}<$sig><$valid>&/&/true)\n[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0$to$anon$from$public$do/$get/([=]!:uuid:f642b891-4130-404a-925e-a65735bceed0$msg$encrypt$keypair/$is#/{})\n[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0$to$anon$from$public$do/$get/([=]!:uuid:f642b891-4130-404a-925e-a65735bceed0$msg$sig$keypair/$is#/{})\n[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0$to$anon$from$public$do/$get/([=]!:uuid:f642b891-4130-404a-925e-a65735bceed0/$is$ref/{})\n[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0$to$anon$from$public$do/$get/(=debish001/$ref/[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0)\n[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0$to$anon$from$public$do/$get/(/$is$ref/{})\n=debish001/$ref/[=]!:uuid:f642b891-4130-404a-925e-a65735bceed0\n(=debish001)/$ref/([=]!:uuid:f642b891-4130-404a-925e-a65735bceed0)\n[+]!:uuid:ca51aeb9-e09e-4305-89d7-87a944a1e1fa<#verified><#email>&/&/\"debish.fesehaye@neustar.biz\"\n[+]!:uuid:ca51aeb9-e09e-4305-89d7-87a944a1e1fa<#verified><#phone>&/&/\"+1.2178192880\"\n/$is$ref/([=]!:uuid:f642b891-4130-404a-925e-a65735bceed0)"

var socialGraph = "=abc/$ref/[=]!1111\n=xyz/$ref/[=]!2222\n[=]!1111/#best#friend/[=]!2222\n(http://facebook.com)*bob/$ref/(http://facebook.com)!a726df\n[=]!1111/#friend/(http://facebook.com)!a726df\n#seattle#soccer=xyz/$ref/#seattle#soccer[=]!2222\n[=]!1111/#teammate/#seattle#soccer[=]!2222"
var attributeSingletons = "=abc/$ref/[=]!1111\n[=]!1111<#age>/&/33\n[=]!1111<#age><$t>/&/\"2010-10-10\"\n[=]!1111<#age>[<$v>]!0/&/32\n[=]!1111<#age>[<$v>]!0<$t>/&/\"2009-10-10\"\n[=]!1111<#age>/$v/[=]!1111<#age>[<$v>]!1\n[=]!1111<#age>[<$v>]!1/$ref/[=]!1111<#age>"