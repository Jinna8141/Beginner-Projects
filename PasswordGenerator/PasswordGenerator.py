# This script generates a random password based on user input for the number of words, numbers, and special characters.

from os.path import isfile
from random import choice,randint


#Download the word file from the URL below, or you can add any word list of your choice.
#  url = 'https://raw.githubusercontent.com/dwyl/english-words/master/words.txt'


# Read the words from the "words.txt" file and split them into a list.
words = open('words.txt','r').read().split("\n")

# List of special characters to be used in the password
special_chars=['!','?','#','@','$','*','&','_','[',']','(',')']


# Generate a random password based on user input
def create_password():
    pass_str=''

    # Get user input for number of words
    num_words= int(input("Enter the number of words for your password: "))

    # Get user input for number of numbers
    num_numbers= int(input("Enter number of numbers in password: "))

    # Get user input for number of special characters
    num_special= int(input("Enter number of special chracters in password: "))


    # Add random words to the password string
    for _ in range(num_words):
        pass_str+=choice(words).lower().capitalize()

    # Add random numbers to the password string
    for _ in range(num_numbers):
        pass_str+=str((randint(0,9)))

    # Add random special characters to the password string
    for _ in range(num_special):
        pass_str+=choice(special_chars)

    # Return the generated password
    return pass_str

# Main function to run the password generator

def main():

    pass_str=create_password()

    print ('\nPassword: %s'%pass_str)


if __name__=='__main__':

    main()

