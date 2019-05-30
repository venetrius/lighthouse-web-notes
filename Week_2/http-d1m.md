## HHTP

### Other Protocols
* FTP  file transfer protocol
* POP3 older e-amil system
* IMAP email Protocol (on the server)
* SMTP simple e-mail protocol (sending )

### Modell

Request   e.g. GET
  first line request header
    GET / HTTP/1.1
    method path protocol  version
Respontse
  firs line
    HTTP/1.1 200 OK
    protocol version status-code

### Client
* The one sending the request, most frequently a browser
* Others:
*   cURL
*   Postman
*

Content-Type: text/html   //section:  tpye-of-the-document (could be json)
User-Agent: curl/7.54     //section:  who-sendt-the-request/versin

### Request Methods
GET, POST, PUT, DELETE

#### GET
  doesn't change the state of the server
  no dody
#### POST
  changes the state of the server
  has body

#### PUT
  changes the state of the server
  has body

#### DELETE
  changes the state of the server
  no body

use forward slashes
/ is the root path


200 OK
* 201 created
301 Moved Permanently
400 Bad Request
500 Internal Server Error