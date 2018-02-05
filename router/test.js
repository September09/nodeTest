
import express from 'express'
// import Project from '../controllers/project'
import BodyParser from'body-parser'
// 创建 application/x-www-form-urlencoded 编码解析
const urlencodedParser = BodyParser.urlencoded({ extended: false })
const router = express.Router();

router.post('/process_post', urlencodedParser, (req, res) => {
    const response = {
        'first_name': req.body.first_name,
        'last_name': req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));

});

// router.post('/createNewProject', urlencodedParser, Project.addProject)
// router.post('/getAllProject', urlencodedParser, Project.getAllProject)
// router.post('/getProjectById', urlencodedParser, Project.getProjectById)
// router.post('/getProject', urlencodedParser, Project.getProject)
// router.post('/updateProject', urlencodedParser, Project.updateProject)
export default router

