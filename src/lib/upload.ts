import { v2 as cloudinary } from "cloudinary"

cloudinary.config({
  url: process.env.CLOUDINARY_URL,
})

export async function uploadToCloudinary(
  file: string,
  folder = "portfolio"
): Promise<{ url: string; publicId: string; width: number; height: number; format: string }> {
  const result = await cloudinary.uploader.upload(file, {
    folder,
    resource_type: "auto",
  })

  return {
    url: result.secure_url,
    publicId: result.public_id,
    width: result.width,
    height: result.height,
    format: result.format,
  }
}

export async function deleteFromCloudinary(publicId: string) {
  await cloudinary.uploader.destroy(publicId)
}
