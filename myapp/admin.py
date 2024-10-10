from django.contrib import admin
from .models import Offers, ApplicationForm

class ApplicationFormAdmin(admin.ModelAdmin):
    list_display = ('user', 'offer', 'full_name', 'email_address')
    search_fields = ('user__username', 'offer__title', 'full_name', 'email_address')

admin.site.register(Offers)
admin.site.register(ApplicationForm, ApplicationFormAdmin)