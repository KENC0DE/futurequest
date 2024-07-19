#!/usr/bin/env python3
"""
Test script for the extended User class
"""
from models.user import User  # Adjust import based on your directory structure

def test_user_extended():
    # Create a User instance
    user = User(
        first_name="John",
        middle_name="A.",
        last_name="Doe",
        date_of_birth="1990-01-01",
        email="john.doe@example.com",
        username="johndoe"
    )

    # Add family members and set additional information
    user.add_family_member("Jane Doe")
    user.set_economic_status("Employed")
    user.update_other_status(education="Bachelor's Degree", hobbies=["Reading", "Traveling"])

    # Expected string representation
    expected_str = """johndoe: john.doe@example.com
John A. Doe
DOB: 1990-01-01
Family Members: Jane Doe
Economic Status: Employed
Other Status: {'education': "Bachelor's Degree", 'hobbies': ['Reading', 'Traveling']}"""
    assert str(user) == expected_str, "Error: __str__ method does not return expected output"

    # Expected dictionary representation
    expected_dict = {
        "first_name": "John",
        "middle_name": "A.",
        "last_name": "Doe",
        "date_of_birth": "1990-01-01",
        "email": "john.doe@example.com",
        "username": "johndoe",
        "family_members": ["Jane Doe"],
        "economic_status": "Employed",
        "other_status": {"education": "Bachelor's Degree", "hobbies": ["Reading", "Traveling"]}
    }
    assert user.to_dict() == expected_dict, "Error: to_dict method does not return expected output"

    # Print the User instance
    print(user)

if __name__ == "__main__":
    test_user_extended()
