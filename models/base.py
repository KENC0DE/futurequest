#!/usr/bin/env python3
"""
Base Class with basic instance methods
"""


class Base:
    def to_dict(self):
        """Convert instance attributes to dictionary."""
        return self.__dict__

    def update_attributes(self, **kwargs):
        """Update instance attributes with given key-value pairs."""
        for key, value in kwargs.items():
            if hasattr(self, key):
                setattr(self, key, value)
            else:
                raise AttributeError(f"Attribute {key} not found in {self.__class__.__name__}")

    def __repr__(self):
        """Return a string representation of the instance."""
        attrs = ", ".join(f"{key}={value!r}" for key, value in self.__dict__.items())
        return f"{self.__class__.__name__}({attrs})"

    def __eq__(self, other):
        """Check equality based on instance attributes."""
        if isinstance(other, self.__class__):
            return self.to_dict() == other.to_dict()
        return False
