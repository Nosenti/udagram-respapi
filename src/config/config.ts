export const config = {
  "dev": {
    "username": "postgres",
    "password": "nosenti123",
    "database": "udagramnosentidev",
    "host": "udagramnosentidev.c0non0vwii64.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-nosenti-dev"
  },
  "jwt": {
    "secret": "helloworld"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
