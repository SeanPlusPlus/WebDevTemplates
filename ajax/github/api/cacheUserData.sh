#!/bin/bash

users=("seanplusplus" "dlbewley")
for user in "${users[@]}"
do
  file="./users/$user"
  url="https://api.github.com/users/$user"
  curl -o $file $url
done

