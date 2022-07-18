FROM golang:latest AS builder

WORKDIR /builder
COPY . /builder

RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app .

FROM alpine:latest AS production
COPY --from=builder /builder/app ./
CMD ["./app"]
