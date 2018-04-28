import datetime, random, csv

today = datetime.datetime.now()
data = []
for x in range(0, 30):
    data.append([datetime.datetime.strftime(today-datetime.timedelta(days=x), '%d-%b-%y'), random.randrange(0,6)])
with open('coffeetest.tsv','wb') as csvfile:
    dummywriter = csv.writer(csvfile, delimiter='\t')
    for x in data:
	dummywriter.writerow(x)
