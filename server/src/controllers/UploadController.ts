import { Request, Response } from "express"
import { UploadFileModel } from '../models'

class UploadController {
    create = async (req: Request, res: Response) => {
        try {
            const userId = req.user;
            const file: any = req.file;

            const fileData = {
                filename: file.originalname,
                size: file.size,
                ext: file.format,
                url: file.path,
                user: userId
            }

            const uploadedFile = new UploadFileModel(fileData);

            const newFile = await uploadedFile.save();

            res.json(newFile);
        } catch (err) {
            console.log(err)
            res.status(500).json({
                message: 'Не удалось загрузить файл.'
            });
        }
    }
    delete = async (req: Request, res: Response) => {

    }
}

export default UploadController