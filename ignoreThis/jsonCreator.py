import math
import requests
from threading import Thread

def processEntries(lo, hi, list):
  for i in range(lo, hi):
    request_result = requests.get('https://pokeapi.co/api/v2/pokemon/{num}'.format(num=i))
    request_content = request_result.json()

    # Process API response
    pokemon = {}
    pokemon['number'] = i
    pokemon['name'] = request_content['name']
    pokemon['height'] = request_content['height']

    list.append(pokemon)

num_threads = 10
threads = [None] * num_threads

dexCount = 898
dex = []

for i in range(num_threads):
  lo = math.floor(i / num_threads * dexCount) + 1
  hi = math.floor((i + 1) / num_threads * dexCount) + 1
  if i == num_threads - 1:
    hi = dexCount + 1
  threads[i] = Thread(target=processEntries, args=(lo, hi, dex))
  threads[i].start()

for i in range(num_threads):
  threads[i].join()

dex.sort(key=lambda mon : mon['number'])

import json

with open('output.json', 'w') as fout:
  json.dump(dex, fout)
  