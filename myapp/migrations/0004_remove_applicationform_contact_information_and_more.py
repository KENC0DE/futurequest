# Generated by Django 5.1.1 on 2024-10-09 07:27

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0003_contactinformation_documentsrequired_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='applicationform',
            name='contact_information',
        ),
        migrations.RemoveField(
            model_name='applicationform',
            name='documents_required',
        ),
        migrations.RemoveField(
            model_name='applicationform',
            name='educational_background',
        ),
        migrations.RemoveField(
            model_name='applicationform',
            name='personal_information',
        ),
        migrations.RemoveField(
            model_name='applicationform',
            name='personal_statements_essays',
        ),
        migrations.RemoveField(
            model_name='applicationform',
            name='recommender1',
        ),
        migrations.RemoveField(
            model_name='applicationform',
            name='recommender2',
        ),
        migrations.RemoveField(
            model_name='applicationform',
            name='recommender3',
        ),
        migrations.AddField(
            model_name='contactinformation',
            name='application_form',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='contact_information', to='myapp.applicationform'),
        ),
        migrations.AddField(
            model_name='documentsrequired',
            name='application_form',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='documents_required', to='myapp.applicationform'),
        ),
        migrations.AddField(
            model_name='educationalbackground',
            name='application_form',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='educational_background', to='myapp.applicationform'),
        ),
        migrations.AddField(
            model_name='personalinformation',
            name='application_form',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='personal_information', to='myapp.applicationform'),
        ),
        migrations.AddField(
            model_name='personalstatementsessays',
            name='application_form',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='personal_statements_essays', to='myapp.applicationform'),
        ),
        migrations.AddField(
            model_name='recommender',
            name='application_form',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='recommenders', to='myapp.applicationform'),
        ),
    ]
