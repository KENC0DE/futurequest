#!/usr/bin/env python3
"""
User module
"""


class User:
    """user class"""

    def __init__(self, **kwargs):
        if kwargs:
            self.firs_name = kwargs.get('first_name')
            self.middle_name = kwargs.get('middle_name')
            self.last_name = kwargs.get('last_name')
            self.date_of_birth = kwargs.get('date_of_birth')
            self.email = kwargs.get('email')
            self.username = kwargs.get('username')

    def __str__(self):
        return f"""{self.username}: {self.email}
{self.firs_name} {self.middle_name} {self.last_name}
DOB: {self.date_of_birth}"""
