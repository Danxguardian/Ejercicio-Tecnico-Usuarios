import React, { useCallback, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import ImageViewer from "react-simple-image-viewer";
import { Button, Row } from "react-bootstrap";

import "./index.css";
import CSpacer from "../../01_Components/CSpacer";

const PUpload = ({}) => {
	const [file, setFile] = useState<File | null>(null);
	const [image, setImage] = useState<Array<string> | null>(null);
	const fileTypes = ["JPG", "PNG", "GIF"];
	const auxArrayImg: Array<string> = [];

	const handleChange = (file: any) => {
		setFile(file);
		Array.from(file).forEach((file: any) => {
			auxArrayImg.push(URL.createObjectURL(file));
		});
		setImage(auxArrayImg);
	};

	const [currentImage, setCurrentImage] = useState(0);
	const [isViewerOpen, setIsViewerOpen] = useState(false);

	const openImageViewer = useCallback((index: any) => {
		setCurrentImage(index);
		setIsViewerOpen(true);
	}, []);

	const closeImageViewer = () => {
		setCurrentImage(0);
		setIsViewerOpen(false);
	};
	return (
		<>
			<div className={"fileUploaderCustom"}>
				<FileUploader
					multiple={true}
					handleChange={handleChange}
					name="file"
					types={fileTypes}
				/>
				<p>
					{file
						? "Se han cargado archivos, si vuelve a cargar se eliminaran los previos"
						: "Aun no ha cargado imagenes"}
				</p>
			</div>
			{/*  */}
			{image && (
				<div>
					{image.map((src, index) => (
						<img
							src={src}
							onClick={() => openImageViewer(index)}
							width="300px"
							key={index}
							style={{ margin: "2px" }}
							alt=""
						/>
					))}

					{isViewerOpen && (
						<ImageViewer
							src={image}
							currentIndex={currentImage}
							onClose={closeImageViewer}
							disableScroll={false}
							backgroundStyle={{
								backgroundColor: "rgba(0,0,0,0.9)",
							}}
							closeOnClickOutside={true}
						/>
					)}
				</div>
			)}
			{image && (
				<div className="d-flex justify-content-end">
					<CSpacer size={32} />
					<Button
						onClick={() => {
							window.location.reload();
						}}
					>
						Subir al repositorio
					</Button>
				</div>
			)}
		</>
	);
};

export default PUpload;
