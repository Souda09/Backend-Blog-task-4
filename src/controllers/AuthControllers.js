import Blogs from "../models/UserSchema.js";

const addblog = async (req, res) => {
    console.log("req.body ---->", req.body);

    try {
        const blog = new Blogs(req.body);   //new blog create  ki ha 
        const data = await blog.save()      //database ma save kiya 
        console.log(data);

        res.json({
            status: true,
            message: "Blog created successfully",
            blog: data,
        })


    }
    catch (error) {
        console.log("error in creating blog ------->", error)

        res.json({
            status: false,
            message: error.message,
        })
    };
};
    // allblogs
    const allBlogs = async (req, res) => {

        try {
            const blog = await Blogs.find();
            //     const blog =await Blogs.find ({tittle: csr})

            res.json({

                status: true,
                message: "Blog  fetched successfully",
                data: blog
            })
            console.log(blog)
        }

        catch (error) {
            console.log("error in fetching blog ----->", error);

            res.json({
                status: false,
                message: error.message,
            })
        }

    };

    //Blog with getByID 
    const getBlogs = async (req, res) => {
        try {
            const { id } = req.params;
            const blog = await Blogs.findById(id);
            if (blog === null) {
                console.log("check blog");   //agr blog na mily tou not found ka message bejhna 

                return res.json({
                    status: false,
                    message: "Blog not found"
                });
            }

            res.json({
                status: true,
                message: "blog fetched successfully",
                data: blog,
            });
            console.log(blog);
        }

        catch(error){
            console.log("error in fetching blog ----->", error.message);
          
            res.json({
                status: false,
                message: error.message
            });
        }

 };

//  blog get by topics
const getByTopic = async (req, res) =>{
    try{
        const {topic} = req.params;
        const blog = await Blogs.findOne({topic: topic})
   
        if(!blog){
            return res.json({
                status: false,
                message: "Blog not found",
            });
        }

        res.json({
            status: true,
            data: blog,
        });
    }

    catch(error){
        res.json({
            status: false,
            message: error.message,
        });
    }
};


export{addblog , allBlogs, getBlogs , getByTopic }