# Generated by Django 5.1.1 on 2024-10-09 07:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0004_remove_applicationform_contact_information_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='documentsrequired',
            name='application_form',
        ),
        migrations.RemoveField(
            model_name='educationalbackground',
            name='application_form',
        ),
        migrations.RemoveField(
            model_name='personalinformation',
            name='application_form',
        ),
        migrations.RemoveField(
            model_name='personalstatementsessays',
            name='application_form',
        ),
        migrations.RemoveField(
            model_name='recommender',
            name='application_form',
        ),
        migrations.AddField(
            model_name='applicationform',
            name='academic_interests',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='additional_information',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='background_influences',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='career_goals',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='certificates_awards',
            field=models.FileField(blank=True, null=True, upload_to='documents/'),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='challenges_overcoming',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='current_address',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='cv',
            field=models.FileField(blank=True, null=True, upload_to='documents/'),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='date_of_birth',
            field=models.DateField(default='2000-01-01'),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='email_address',
            field=models.EmailField(default='', max_length=254),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='extracurricular_activities',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='full_name',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='gender',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='gre_gmat_scores',
            field=models.FileField(blank=True, null=True, upload_to='documents/'),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='high_school_address',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='high_school_gpa',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=4),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='high_school_graduation_date',
            field=models.DateField(default='2000-01-01'),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='high_school_honors_awards',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='high_school_major_subjects',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='high_school_name',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='highschool_diploma',
            field=models.FileField(blank=True, null=True, upload_to='documents/'),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='highschool_transcript',
            field=models.FileField(blank=True, null=True, upload_to='documents/'),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='national_exam_result',
            field=models.FileField(blank=True, null=True, upload_to='documents/'),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='nationality',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='passport_id_scan',
            field=models.FileField(blank=True, null=True, upload_to='documents/'),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='passport_number',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='passport_size_photo',
            field=models.ImageField(blank=True, null=True, upload_to='photos/'),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='permanent_address',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='personal_achievements',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='phone_number',
            field=models.CharField(default='', max_length=20),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='recommender1_email',
            field=models.EmailField(default='', max_length=254),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='recommender1_institution_organization',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='recommender1_name',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='recommender1_phone_number',
            field=models.CharField(default='', max_length=20),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='recommender1_title_position',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='recommender2_email',
            field=models.EmailField(default='', max_length=254),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='recommender2_institution_organization',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='recommender2_name',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='recommender2_phone_number',
            field=models.CharField(default='', max_length=20),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='recommender2_title_position',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='recommender3_email',
            field=models.EmailField(default='', max_length=254),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='recommender3_institution_organization',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='recommender3_name',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='recommender3_phone_number',
            field=models.CharField(default='', max_length=20),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='recommender3_title_position',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='sat_act_scores',
            field=models.FileField(blank=True, null=True, upload_to='documents/'),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='toefl_ielts_scores',
            field=models.FileField(blank=True, null=True, upload_to='documents/'),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='undergraduate_degree_awarded',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='undergraduate_gpa',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=4),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='undergraduate_graduation_date',
            field=models.DateField(default='2000-01-01'),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='undergraduate_honors_awards',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='undergraduate_major_subjects',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='undergraduate_university_address',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='undergraduate_university_name',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='unique_qualities',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='university_degree',
            field=models.FileField(blank=True, null=True, upload_to='documents/'),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='university_transcripts',
            field=models.FileField(blank=True, null=True, upload_to='documents/'),
        ),
        migrations.AddField(
            model_name='applicationform',
            name='work_experience',
            field=models.FileField(blank=True, null=True, upload_to='documents/'),
        ),
        migrations.DeleteModel(
            name='ContactInformation',
        ),
        migrations.DeleteModel(
            name='DocumentsRequired',
        ),
        migrations.DeleteModel(
            name='EducationalBackground',
        ),
        migrations.DeleteModel(
            name='PersonalInformation',
        ),
        migrations.DeleteModel(
            name='PersonalStatementsEssays',
        ),
        migrations.DeleteModel(
            name='Recommender',
        ),
    ]