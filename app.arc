@app
begin-app

@static

@http
post /upload

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
