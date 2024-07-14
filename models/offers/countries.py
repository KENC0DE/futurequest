#!/usr/bin/env python3
"""
Countries list"""


class Country:
    """Country"""

    def __init__(self, **kwargs):
        self.name = kwargs.get('name')
        self.ed_offer = kwargs.get('ed_offer', None)
        self.wrk_offer = kwargs.get('wrk_offer', None)
        self.description = kwargs.get('description')


    def __str__(self):
        return f"""{self.name}: ({self.ed_offer} | {self.wrk_offer})"""
