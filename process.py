from PIL import Image, ImageDraw

def downsample_image_pillow(input_path, output_path, scale_factor):
    try:
        # 打开图片
        with Image.open(input_path) as img:
            # 计算新的尺寸
            width, height = img.size
            new_width = int(width * scale_factor)
            new_height = int(height * scale_factor)
            
            # 使用thumbnail方法进行下采样，该方法会保持图片的宽高比
            # img.thumbnail((new_width, new_height))
            
            # 使用resize方法进行下采样
            downsampled_img = img.resize((new_width, new_height), Image.LANCZOS)
            
            # 保存下采样后的图片
            downsampled_img.save(output_path)
            print(f"图片下采样成功，新尺寸为: {downsampled_img.size}")
            
    except FileNotFoundError:
        print("错误：未找到输入文件。")
    except Exception as e:
        print(f"发生错误: {e}")


def jpg_to_png(input_path, output_path=None):
    try:
        # 打开 JPG 图片
        with Image.open(input_path) as img:
            # 使用 save() 方法保存为 PNG 格式
            img.save(output_path, "PNG")
            print(f"成功将 '{input_path}' 转换为 '{output_path}'")

    except Exception as e:
        print(f"转换过程中发生错误: {e}")


def round_corners(image_path, output_path, radius):
    try:
        # Open the image and ensure it has an alpha channel
        image = Image.open(image_path).convert("RGBA")
        width, height = image.size

        # Create a new image with a transparent background
        rounded_image = Image.new("RGBA", (width, height), (0, 0, 0, 0))
        draw = ImageDraw.Draw(rounded_image)

        # Draw the rounded rectangle shape
        draw.rounded_rectangle(
            (0, 0, width, height),
            radius,
            fill="white"
        )

        # Composite the original image with the rounded rectangle shape
        rounded_image = Image.composite(image, rounded_image, rounded_image)

        # Save the output image
        rounded_image.save(output_path)
        print(f"Successfully saved the rounded image to: {output_path}")

    except FileNotFoundError:
        print(f"Error: The file at {image_path} was not found.")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")


if __name__ == "__main__":
    # 下采样
    # downsample_image_pillow("./images/logo_profile.jpg", "logo_profile_small.jpg", 0.1)

    # jpg转png
    # jpg_to_png("logo_profile_small.jpg", "logo_profile_small.png")

    # png图片角圆滑
    round_corners("logo_profile.png", "round_logo_profile.png", 15)