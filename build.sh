#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Function to display a message
function echo_message() {
    echo "======================================"
    echo "$1"
    echo "======================================"
}

# Step 1: Install dependencies from requirements.txt
echo_message "Installing dependencies from requirements.txt"
pip install -r requirements.txt

# Step 2: Run Django migrations
echo_message "Running Django migrations"
python manage.py migrate

# Step 3: Create Django superuser
echo_message "Creating Django superuser"

# Check if the required environment variables are set
if [ -z "$DJANGO_SUPERUSER_USERNAME" ] || [ -z "$DJANGO_SUPERUSER_PASSWORD" ]; then
    echo "Error: DJANGO_SUPERUSER_USERNAME and DJANGO_SUPERUSER_PASSWORD environment variables must be set."
    exit 1
fi

# Create the superuser using a Django management command
python manage.py shell <<EOF
from django.contrib.auth import get_user_model
User = get_user_model()
if not User.objects.filter(username='$DJANGO_SUPERUSER_USERNAME').exists():
    User.objects.create_superuser('$DJANGO_SUPERUSER_USERNAME', 'admin@example.com', '$DJANGO_SUPERUSER_PASSWORD')
EOF

# Optional: Collect static files (uncomment if needed)
# echo_message "Collecting static files"
# python manage.py collectstatic --noinput

echo_message "Build script completed successfully"
