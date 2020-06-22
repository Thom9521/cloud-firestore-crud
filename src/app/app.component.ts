import { Component } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

interface Post {
  title: string;
  content: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  postsCol: AngularFirestoreCollection<Post>;
  posts: any;

  title: string;
  content: string;

  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;

  postId: string;
  postTitle: string;
  postContent: string;

  constructor(private database: AngularFirestore) {}

  ngOnInit() {
    this.postsCol = this.database.collection("posts");
    this.posts = this.postsCol.snapshotChanges().map((actions) => {
      return actions.map((a) => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return { id, data };
      });
    });
  }

  addPost() {
    this.database
      .collection("posts")
      .add({ title: this.title, content: this.content });
  }

  getPost(postId) {
    this.postDoc = this.database.doc("posts/" + postId);
    this.post = this.postDoc.valueChanges();
    this.postId = postId;
  }

  updatePost() {
    this.database.doc("posts/" + this.postId).update({
      title: this.postTitle,
      content: this.postContent,
    });
    console.log("Updated post");
  }
  deletePost(postId) {
    this.database.doc("posts/" + postId).delete();
  }
}
