# Generated by Django 5.2 on 2025-05-01 16:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('challenge_app', '0003_answer_text'),
    ]

    operations = [
        migrations.RenameField(
            model_name='challenge',
            old_name='date',
            new_name='dateOf',
        ),
    ]
