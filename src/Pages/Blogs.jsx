import useTitle from "../hooks/useTitle";


const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className="p-5">
            <h1 className="text-center text-5xl text-green-700">Blogs</h1>
            <h3 className="text-green-700 mt-12">1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
            <p>
            Access token: <br /> Access token is to access specific resources on a server. it has an expiration period. When a client wants to access a protected resource, it includes the access token in the request headers.If the access token is valid, the server grants access to the requested resource.
            <br />
            We should store them in session storage.
            <br />
            Refresh Token: <br /> Refresh Token is new access token when the current one expires without requiring the user to re-authenticate.  The server verifies the refresh token, and if it is valid, it generates a new access token and returns it to the client. 
            <br />
            The best practice is to store refresh tokens in an HttpOnly secure cookie. 
            </p>
            <h3 className="text-green-700 mt-5">2. Compare SQL and NoSQL databases?</h3>
            <p>
            1. SQL databases have fixed or static or predefined schema NoSQL have a dynamic schema.
            <br />
            2. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
            <br />
            3.  SQL databases are MySQL, PostgreSQL. NoSQL databases are MongoDB, GraphQL.
            </p>
            <h3 className="text-green-700 mt-5">3. What is express js? What is Nest JS?</h3>
            <p>
            Express js:
            <br />
            Express is a flexible framework that is easy to use and has a large community of developers.It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.

            <br />
            Nest JS:
            <br />
            Nest. js is a server-side Node. js framework that's great for building highly testable and maintainable backend applications. It's a layer built on the top of the Node js that helps manage servers and routes.

            </p>
            <h3 className="text-green-700 mt-5">4. What is MongoDB aggregate and how does it work?</h3>
            <p>
            An aggregation pipeline consists of one or more stages that process documents: Each stage performs an operation on the input documents.
            </p>
        </div>
    );
};

export default Blogs;