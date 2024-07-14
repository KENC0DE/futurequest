#!/usr/bin/env python3

from models.user import User
from models.offers.countries import Country
from models.offers.eductation import Education
from models.offers.work import Work


u = {'first_name': 'kenansa',
     'middle_name': 'mesetet',
     'last_name': 'nigusie',
     'username': 'kennn',
     'email': 'ken@gmail.com',
     'date_of_birth': '20-11-2002'}


user1 = User(**u)

print(user1)


c = {
    'name': 'German',
    'ed_offer': 'ED',
    'description': 'a good country'
}

country = Country(**c)

print()
print(country)

ed = {
    'title': 'bsc',
    'country': 'German',
    'full_scholarship': True,
    'ed_level': 'bachelors',
    'description': 'fuck you'
}

edu = Education(**ed)

print()
print(edu)
