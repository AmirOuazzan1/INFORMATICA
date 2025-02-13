class Post {
    constructor(id, author, type, data, nickname, link, message, numberOkLike, media) {
        this.id = id;
        this.author = author;
        this.type = type;
        this.data = data;
        this.nickname = nickname;
        this.link = link;
        this.message = message;
        this.numberOkLike = numberOkLike;
        this.media = media;
    }

    newPost(newData) {
        Object.assign(this, newData);
    }

    update(updatedData) {
        Object.assign(this, updatedData);
    }

    edit(newMessage) {
        this.message = newMessage;
    }

    commit() {
        console.log("Post salvato:", this);
    }
}

class Comment extends Post {
    constructor(id, author, data, nickname, link, message, numberOkLike, media, parentPostId) {
        super(id, author, "comment", data, nickname, link, message, numberOkLike, media);
        this.parentPostId = parentPostId;
    }
}
