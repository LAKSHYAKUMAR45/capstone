import random
from unittest import result
# import ipinfo

from firebase import firebase

i = 1


firebase = firebase.FirebaseApplication("https://sensordata-9e3fb-default-rtdb.firebaseio.com/",None)


# while i<100:
Artificial_pH = round(random.uniform(2,12), 2)
Artificial_N = round(random.normalvariate(0.551782, 0.209015), 1)
Artificial_P = round(random.normalvariate(0.550594, 0.203223), 1)
Artificial_K = round(random.normalvariate(0.554283, 0.209547), 1)

# data_pH = {'ph' : Artificial_pH}
# data_n = {'n' : Artificial_N}
# data_p = {'p' : Artificial_P}
# data_k = {'k' : Artificial_K}


result = firebase.post("https://sensordata-9e3fb-default-rtdb.firebaseio.com/pH", Artificial_pH)
result = firebase.post("https://sensordata-9e3fb-default-rtdb.firebaseio.com/n", Artificial_N)
result = firebase.post("https://sensordata-9e3fb-default-rtdb.firebaseio.com/p", Artificial_P)
result = firebase.post("https://sensordata-9e3fb-default-rtdb.firebaseio.com/k", Artificial_K)

print(result)
    # i = i+1