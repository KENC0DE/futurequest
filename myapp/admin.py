from django.contrib import admin
from .customs.offers import Offers
from .customs.applications import ApplicationForm, PersonalInformation, ContactInformation, EducationalBackground, Recommenders, PersonalStatements, Documents

class ApplicationFormAdmin(admin.ModelAdmin):
    list_display = ('user', 'offer')

admin.site.register(Offers)
admin.site.register(ApplicationForm, ApplicationFormAdmin)
admin.site.register(PersonalInformation)
admin.site.register(ContactInformation)
admin.site.register(EducationalBackground)
admin.site.register(Recommenders)
admin.site.register(PersonalStatements)
admin.site.register(Documents)
