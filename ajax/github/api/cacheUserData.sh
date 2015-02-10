#!/bin/bash

# array of github users
users=(
  "seanplusplus"
  "dlbewley"
  "cwalkatron"
)

# loop through user array
for user in "${users[@]}"
do

  # local file for data caching
  file="./users/$user"

  # github api url
  url="https://api.github.com/users/$user"

  # curl command to fetch and save data
  curl -o $file $url
done

