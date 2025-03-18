"""a=10
b=20
c=(a+b)
print(c)
def choose(fruit):
    if fruit == "apple":
        return "I love apples!"
    elif fruit == "banana":
        return "I love bananas!"
    elif fruit == "orange":
        return "I love oranges!"
    else:
        return "I don't like that fruit!"

print(choose("apple"))"""

#python lists, tuples, dictionaries and sets
#Lists: Lists are mutable, ordered, and can contain duplicate elements

"""
#Lists
my_list = ["apple", "banana", "orange"]
print(my_list)
print(my_list[0])
my_list.append("grape") #add to the end of the list
print(my_list)
for fruit in my_list: #iterator loop
    print(fruit)
del my_list[0] #delete the first element
my_list.remove(my_list[0]) #remove the first element
my_list.insert(0, "apple") #insert apple at the beginning of the list

#Tuples
#Tuples are immutable, ordered, and can contain duplicate elements
my_tuple = ("apple", "banana", "orange")
'''
my_tuple.insert(0, "grape") #this will raise an error
my_tuple.append("grape") #this will raise an error
my_tuple[0] = "grape" #this will raise an error
'''
print(my_tuple.count("apple")) #count the number of times apple appears in the tuple
print(my_tuple.index("banana")) #return the first occurence index of banana in the tuple
print(my_tuple)

#Dictionaries
#Dictionaries hold key values pairs
my_dict = {"apple": 1, "banana": 2, "orange": 3}
print(my_dict["apple"])
my_dict["grape"] = 4

#loop through a dictionary
for key in my_dict:
    print(key, my_dict[key])

#check if a key exists in a dictionary
if "apple" in my_dict:
    print("Yes, apple is in the dictionary")

del my_dict["apple"] #delete the key value pair with the key apple
my_dict.pop("banana") #delete the key value pair with the key banana

#nested dictionaries
my_dict = {"fruit": {"apple": 1, "banana": 2, "orange": 3}, "vegetables": {"carrot": 4, "spinach": 5, "cabbage": 6}}
print(my_dict["fruit"]["apple"])#access the value of the key apple in the fruit dictionary
print(my_dict["vegetables"]["carrot"])#access the value of the key carrot in the vegetables dictionary
#Appending items to a dictionary
students={
    "name": "John",
    "age": 20,
    "grade": 12,
    "subjects": ["Math", "Science", "English"]
}

#add a new key value pair to the dictionary
students["height"] =180
print(students)

"""
#Sets
#Sets are unordered and do not allow duplicate elements
my_set = {"apple", "banana", "orange"}
print(my_set)

# Add elements to a set
my_set.add("grape")
print(my_set)

# Remove elements from a set
my_set.remove("banana")
print(my_set)

# Union of sets
another_set = {"pineapple", "mango", "apple"}
union_set = my_set.union(another_set)
print("Union:", union_set)

# Intersection of sets
intersection_set = my_set.intersection(another_set)
print("Intersection:", intersection_set)

# Difference of sets
difference_set = my_set.difference(another_set)
print("Difference:", difference_set)

# Symmetric difference of sets
symmetric_difference_set = my_set.symmetric_difference(another_set)
print("Symmetric Difference:", symmetric_difference_set)

# Check if a set is a subset of another set
is_subset = my_set.issubset(union_set)
print("Is subset:", is_subset)

# Check if a set is a superset of another set
is_superset = union_set.issuperset(my_set)
print("Is superset:", is_superset)

# Define a set with a boolean value
my_set = {"apple", "banana", "orange", True}

# Check if the boolean value True is in the set
if True in my_set:
    print("True is in the set")
else:
    print("True is not in the set")

# Convert a set to a list
my_list = list(my_set)
print(my_list)
"""

This code includes various set operations such as adding and removing elements, union, intersection, difference, symmetric difference, and checking for subsets and supersets.
"""