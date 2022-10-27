x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]
students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
# update
def iterateDictionary(students):
    
    x[1][0]=15
    print(x)
    students[0]['last_name']= 'Brown'
    print(students[0])
    sports_directory['soccer'][0]= 'koki'
    print(sports_directory['soccer'])
    z[0]['y']='30'
    print(z)
#iterate a list od Dictionaries
def iterate(some_list):
    for i in range(some_list):
        print(some_list)
def iterate(some_list):
    for i in range(0,len(some_list)):
        chaine = ""
        for key,val in some_list[i].items():
            chaine+= f" {key} - {val},"
        print(chaine)
iterate(students)


# get values
def values(key_name, some_list):
    for i in range(0,len(some_list)):
        for key,val in some_list[i].items():
            if key==key_name:
                print(val)

values('first_name',students)   
values('last_name',students)


#dictionary with list  
def Info(some_dict):
    for key,val in some_dict.items():
        print(f"{len(val)} {key.upper()}")
        for i in range(0, len(val)):
            print(val[i])


Info(dojo)


