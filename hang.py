from time import sleep

def cd (ex,ht,rt,):
	while ht > 0:
		print ("hang", ht)
		ht -= 1
		sleep(ms)
		
		if ht ==0:
			while rt > 0:
				print("rest", rt)
				sleep(ms)
				rt -= 1
			
			return
ms = .1			
h =5	
r = 3
sets = 5		
ex = 5

while sets > 0:
	cd( ex, h, r)
	sets -= 1
	if sets <0:
		print("finish!")
	


	
	
	