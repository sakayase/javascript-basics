import math
import time

def isPrime(num):
    if num == 1 or num <= 0 or num % 2 == 0:
        return False
    for i in range(3, round(math.sqrt(num)), 2):
        if num % i == 0:
            return False
    return True 



start_time = time.time_ns() // 1000000 
print(isPrime(100000000003))
print(f'Execution time : {time.time_ns() // 1000000  - start_time}ms')

# 12468 ms pour 100000000003 en JS
# 12 ms pour 100000000003 en Python3