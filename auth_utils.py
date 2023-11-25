import bcrypt


# hash pw
def hash_password(password):
    password_bytes = password.encode('utf-8')
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password_bytes, salt)
    return hashed_password


# verify pw
def check_password(hashed_password, user_password):
    user_password_bytes = user_password.encode('utf-8')
    return bcrypt.checkpw(user_password_bytes, hashed_password)


