#!/usr/bin/env python3
"""
Work module
"""


class Work:
    """Work module"""
    
    def __init__(self, **kwargs):
        self.title = kwargs.get('title')
        self.coutry = kwargs.get('country')
        self.description = kwargs.get('description')

    def __str__(self):
        return f"""{self.title}: {self.coutry}"""
