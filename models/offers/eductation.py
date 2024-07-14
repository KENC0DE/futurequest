#!/usr/bin/env python3
"""
Education module
"""


class Education:
    """Education module"""
    
    def __init__(self, **kwargs):
        self.title = kwargs.get('title')
        self.coutry = kwargs.get('country')
        self.full_scholarship = kwargs.get('full_scholarship')
        self.ed_level = kwargs.get('ed_level')
        self.description = kwargs.get('description')

    def paid(self):
        """Do if not full scholarship"""
        if not self.full_scholarship:
            pass

    def __str__(self):
        return f"""{self.title}: {self.coutry} full: {self.full_scholarship}"""
