from posts import Posts
from users import Users
from db import create_tables

create_tables()

# Create users
#Users.insert_user("alice", "password123", "Alice's profile")
#Users.insert_user("bob", "pass456", "Bob's profile")

Users.login_user("alice", "password123")
Users.login_user("bob", "pass456")


# Add posts
post_1 = {
    "user_id": 1,
    "content": "This is Alice's first post.",
    "image": "woman.jpg"
}

Posts.insert_post(post_1)

post_2 = {
    "user_id": 2,
    "content": "Hello from Bob!",
    "image": "man.jpg"
}
Posts.insert_post(post_2)

# Add comments
comment_1 = {
    "user_id": 1,
    "post_id": 1,
    "content": "Nice post, Alice!",
}
Posts.add_comment(comment_1)

comment_2 = {
    "user_id": 2,
    "post_id": 2,
    "content": "Great to hear from you, Bob!",
}
Posts.add_comment(comment_2)

# Add likes
like_1 = {
    "user_id": 2,
    "post_id": 1,
}
Posts.add_like(like_1)

like_2 = {
    "user_id": 1,
    "post_id": 2,
}
Posts.add_like(like_2)
