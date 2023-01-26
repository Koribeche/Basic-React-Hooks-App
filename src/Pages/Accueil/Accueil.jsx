import { useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import useAuth from "../../Contexts/AuthContext";
import usePosts from "../../Contexts/PostsContext";

export default function Accueil() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { posts } = usePosts();

  return (
    <div className="w-100 text-center">
      <>
        {user ? (
          <div>
            <img src={user.photo} className="userpic" alt="users profile" />
            <div>
              <span className="fw-bold">
                {user.nom} {user.prenom}
              </span>
              <p> {user.email} </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="btn btn-primary" onClick={() => navigate("/login")}>
              <FaSignInAlt /> Login
            </div>
          </div>
        )}
      </>

      {posts.map((post) => (
        <div key={post.id} className="card my-3">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
