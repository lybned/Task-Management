from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin


class UserAccountManager(BaseUserManager):
    def create_user(self, email, password=None, **kwargs):

        if not email:
            raise ValueError("Users must have an email address")

        user = self.model(
            email=self.normalize_email(email).lower(),
            **kwargs
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **kwargs):

        user = self.create_user(
            email,
            password=password,
            **kwargs
        )
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
  
    first_name = models.CharField(
      max_length=255
    )
    
    last_name = models.CharField(
      max_length=255
    )
    
    email = models.EmailField(
        unique=True,      
        max_length=255,
    )
    
    date_of_birth = models.DateField()
    
    # Can login or not
    is_active = models.BooleanField(default=True)
    
    # Access to admin panel
    is_staff = models.BooleanField(default=False)
    
    # Super permission
    is_superuser= models.BooleanField(default=False)
    
    objects = UserAccountManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name"]

    def __str__(self):
        return self.email
