/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import {
	Stepper,
	Step,
	StepLabel,
	Button,
	Typography,
	TextField,
	FormControl,
	FormLabel,
	FormGroup,
	FormControlLabel,
	Checkbox,
	LinearProgress,
} from '@material-ui/core';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import storage from '../../../firebase';
import Styles from './registrationForm.module.scss';

const steps = [
	'Basic Info',
	'Upload Documents',
];

const RegistrationForm = () => {
	const [activeStep, setActiveStep] = useState(0);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [tagline, setTagline] = useState([]);
	const [tags, setTags] = useState([]);
	const [coverImage, setCoverImage] = useState([]);
	const [displayPicture, setDisplayPicture] = useState([]);
	const [certificate, setCertificate] = useState([]);
	const [images, setImages] = useState([]);
	const [description, setDescription] = useState('');
	const [address, setAddress] = useState([]);
	const [phone, setPhone] = useState([]);
	const [isUploading, setIsUploading] = useState(false);
	const [progresscoverpercent, setProgressCoverpercent] = useState(0);
	const [progressdisplaypercent, setProgressDisplaypercent] = useState(0);
	const [progresscertificatepercent, setProgressCertificatepercent] = useState(0);
	const [progresspercent, setProgresspercent] = useState(0);
	const handleCoverImageUpload = async (e) => {
		setIsUploading(true);
		e.preventDefault();
		const { files } = e.target;
		if (!files) return;

		Array.from(files).forEach((file, index) => {
			if (index < 2) {
				const storageRef = ref(storage, `files/${file.name}${Date.now()}`);
				const uploadTask = uploadBytesResumable(storageRef, file);
				uploadTask.on(
					'state_changed',
					(snapshot) => {
						const progress = Math.round(
							(snapshot.bytesTransferred / snapshot.totalBytes) * 100
						);
						setProgressCoverpercent(progress);
					},
					(error) => {
						alert(error);
					},
					() => {
						getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
							setCoverImage((prevImages) => [...prevImages, downloadURL]);
						});
					}
				);
			} else {
				alert('You can only upload 1 image');
			}
		});
		setIsUploading(false);
		e.target.value = null;
	};
	const handleDisplayPictureUpload = async (e) => {
		setIsUploading(true);
		e.preventDefault();
		const { files } = e.target;
		if (!files) return;

		Array.from(files).forEach((file, index) => {
			if (index < 2) {
				const storageRef = ref(storage, `files/${file.name}${Date.now()}`);
				const uploadTask = uploadBytesResumable(storageRef, file);
				uploadTask.on(
					'state_changed',
					(snapshot) => {
						const progress = Math.round(
							(snapshot.bytesTransferred / snapshot.totalBytes) * 100
						);
						setProgressDisplaypercent(progress);
					},
					(error) => {
						alert(error);
					},
					() => {
						getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
							setDisplayPicture((prevImages) => [...prevImages, downloadURL]);
						});
					}
				);
			} else {
				alert('You can only upload 1 image1');
			}
		});
		setIsUploading(false);
		e.target.value = null;
	};

	const handleFileUpload = async (e) => {
		setIsUploading(true);
		e.preventDefault();
		const { files } = e.target;
		if (!files) return;

		Array.from(files).forEach((file, index) => {
			if (index < 5) {
				const storageRef = ref(storage, `files/${file.name}${Date.now()}`);
				const uploadTask = uploadBytesResumable(storageRef, file);
				uploadTask.on(
					'state_changed',
					(snapshot) => {
						const progress = Math.round(
							(snapshot.bytesTransferred / snapshot.totalBytes) * 100
						);
						setProgresspercent(progress);
					},
					(error) => {
						alert(error);
					},
					() => {
						getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
							setImages((prevImages) => [...prevImages, downloadURL]);
						});
					}
				);
			} else {
				alert('You can only upload 5 images');
			}
		});
		setIsUploading(false);
		e.target.value = null;
	};
	const handleCertificateUpload = async (e) => {
		setIsUploading(true);
		e.preventDefault();
		const { files } = e.target;
		if (!files) return;

		Array.from(files).forEach((file, index) => {
			if (index < 5) {
				const storageRef = ref(storage, `files/${file.name}${Date.now()}`);
				const uploadTask = uploadBytesResumable(storageRef, file);
				uploadTask.on(
					'state_changed',
					(snapshot) => {
						const progress = Math.round(
							(snapshot.bytesTransferred / snapshot.totalBytes) * 100
						);
						setProgressCertificatepercent(progress);
					},
					(error) => {
						alert(error);
					},
					() => {
						getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
							setCertificate((prevImages) => [...prevImages, downloadURL]);
						});
					}
				);
			} else {
				alert('You can only upload 5 Certificates');
			}
		});
		setIsUploading(false);
		e.target.value = null;
	};

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleDeleteCoverImage = (index) => {
		const newCoverImages = coverImage.filter((image, i) => i !== index);
		setCoverImage(newCoverImages);
	};
	const handleDeleteDisplayImage = (index) => {
		const newDisplayImages = displayPicture.filter((image, i) => i !== index);
		setDisplayPicture(newDisplayImages);
	};
	const handleDeleteImage = (index) => {
		const newImages = images.filter((image, i) => i !== index);
		setImages(newImages);
	};
	const handleDeleteCertificateImage = (index) => {
		const newCertificateImages = certificate.filter((image, i) => i !== index);
		setCertificate(newCertificateImages);
	};

	const handleSubmit = () => {
		const tour = {
			name,
			email,
			password,
			tagline,
			tags,
			images,
			description,
			address,
			phone,
		};
		console.log(tour);
	};

	const handleReset = () => {
		setActiveStep(0);
		setName('');
		setEmail('');
		setPassword('');
		setTagline([]);
		setTags([]);
		setImages([]);
		setDescription('');
		setPhone('');
		setAddress('');
	};

	const getStepContent = (step) => {
		switch (step) {
		case 0:
			return (
				<FormControl fullWidth margin="normal" className={Styles.form}>
					<FormLabel component="legend">Basic Info</FormLabel>
					<div className={Styles.inputContainer}>
						<TextField
							id="name"
							label="Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className={Styles.input}
						/>
						<TextField
							id="destination"
							label="Email"
							value={email}
							type="email"
							onChange={(e) => setEmail(e.target.value)}
							className={Styles.input}
						/>
						<TextField
							id="durationDays"
							label="Password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className={Styles.input}
						/>
					</div>
					<div className={Styles.inputContainer}>
						<TextField
							id="requirements"
							label="Tagline"
							value={tagline}
							onChange={(e) => setTagline(e.target.value)}
							className={Styles.input}
						/>
						<TextField
							id="pricePerAdult"
							label="Phone"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							className={Styles.input}
						/>
						<TextField
							id="inclusions"
							label="Address"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
							className={Styles.input}
						/>
					</div>

					<TextField
						id="description"
						label="Description"
						multiline
						minRows={1}
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
					<FormGroup>
						<div className={Styles.tags}>
							<FormLabel component="legend" className={Styles.title}>
                Specialities
							</FormLabel>
							<FormControlLabel
								control={
									<Checkbox
										checked={tags.includes('Hiking')}
										onChange={(e) => (e.target.checked
											? setTags([...tags, 'Hiking'])
											: setTags(tags.filter((tag) => tag !== 'Hiking')))
										}
									/>
								}
								label="Hiking"
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={tags.includes('Trekking')}
										onChange={(e) => (e.target.checked
											? setTags([...tags, 'Trekking'])
											: setTags(tags.filter((tag) => tag !== 'Trekking')))
										}
									/>
								}
								label="Trekking"
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={tags.includes('Rafting')}
										onChange={(e) => (e.target.checked
											? setTags([...tags, 'Rafting'])
											: setTags(tags.filter((tag) => tag !== 'Rafting')))
										}
									/>
								}
								label="Rafting"
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={tags.includes('Camping')}
										onChange={(e) => (e.target.checked
											? setTags([...tags, 'Camping'])
											: setTags(tags.filter((tag) => tag !== 'Camping')))
										}
									/>
								}
								label="Camping"
							/>
						</div>
					</FormGroup>
				</FormControl>
			);
		case 1:
			return (
				<FormControl fullWidth margin="normal">
					<FormLabel component="legend">Cover Image (.jpg, .png)</FormLabel>
					<input
						type="file"
						accept="image/*"
						multiple
						onChange={(e) => handleCoverImageUpload(e)}
					/>
					{progresscoverpercent > 0 && progresscoverpercent < 100 && (
						<LinearProgress
							variant="determinate"
							value={progresscoverpercent}
							style={{ width: '100%', marginTop: '1rem' }}
						/>
					)}
					{isUploading && <p>Uploading images...</p>}
					<div className={Styles.uploadedImages}>
						{coverImage.map((imageUrl, index) => (
							<div className={Styles.uploadedImage}>
								<img src={imageUrl} alt={`Image ${index + 1}`} key={index} />
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									fill="red"
									class="bi bi-x-circle"
									viewBox="0 0 16 16"
									onClick={() => handleDeleteCoverImage(index)}
									className={Styles.deleteIcon}
								>
									<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
									<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
								</svg>
							</div>
						))}
					</div>
					<FormLabel component="legend">Display Picture (.jpg, .png)</FormLabel>
					<input
						type="file"
						accept="image/*"
						multiple
						onChange={(e) => handleDisplayPictureUpload(e)}
					/>
					{progressdisplaypercent > 0 && progressdisplaypercent < 100 && (
						<LinearProgress
							variant="determinate"
							value={progressdisplaypercent}
							style={{ width: '100%', marginTop: '1rem' }}
						/>
					)}
					{isUploading && <p>Uploading images...</p>}
					<div className={Styles.uploadedImages}>
						{displayPicture.map((imageUrl, index) => (
							<div className={Styles.uploadedImage}>
								<img src={imageUrl} alt={`Image ${index + 1}`} key={index} />
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									fill="red"
									class="bi bi-x-circle"
									viewBox="0 0 16 16"
									onClick={() => handleDeleteDisplayImage(index)}
									className={Styles.deleteIcon}
								>
									<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
									<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
								</svg>
							</div>
						))}
					</div>
					<FormLabel component="legend">Images (.jpg, .png)</FormLabel>
					<input
						type="file"
						accept="image/*"
						multiple
						onChange={(e) => handleFileUpload(e)}
					/>
					{progresspercent > 0 && progresspercent < 100 && (
						<LinearProgress
							variant="determinate"
							value={progresspercent}
							style={{ width: '100%', marginTop: '1rem' }}
						/>
					)}
					{isUploading && <p>Uploading images...</p>}
					<div className={Styles.uploadedImages}>
						{images.map((imageUrl, index) => (
							<div className={Styles.uploadedImage}>
								<img src={imageUrl} alt={`Image ${index + 1}`} key={index} />
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									fill="red"
									class="bi bi-x-circle"
									viewBox="0 0 16 16"
									onClick={() => handleDeleteImage(index)}
									className={Styles.deleteIcon}
								>
									<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
									<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
								</svg>
							</div>
						))}
					</div>
					<FormLabel component="legend">Certificates (.pdf)</FormLabel>
					<input
						type="file"
						accept=".pdf"
						multiple
						onChange={(e) => handleCertificateUpload(e)}
					/>
					{progresscertificatepercent > 0
            && progresscertificatepercent < 100 && (
						<LinearProgress
							variant="determinate"
							value={progresscertificatepercent}
							style={{ width: '100%', marginTop: '1rem' }}
						/>
					)}
					{isUploading && <p>Uploading images...</p>}
					<div className={Styles.uploadedImages}>
						{certificate.map((pdfUrl, index) => (
							<div className={Styles.uploadedImage}>
								<embed
									src={pdfUrl}
									type="application/pdf"
									width="150px"
									height="200px"
								/>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									fill="red"
									class="bi bi-x-circle"
									viewBox="0 0 16 16"
									onClick={() => handleDeleteCertificateImage(index)}
									className={Styles.deleteIcon}
								>
									<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
									<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
								</svg>
							</div>
						))}
					</div>
				</FormControl>
			);
		default:
			return null;
		}
	};

	return (
		<div>
			<Stepper
				activeStep={activeStep}
				alternativeLabel
				className={Styles.stepper}
			>
				{steps.map((label) => (
					<Step key={label} className={Styles.step}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			{activeStep === steps.length ? (
				<div>
					<Typography variant="h5" align="center" gutterBottom>
            Tour Created!
					</Typography>
					<Button onClick={handleReset}>Create Another Tour</Button>
				</div>
			) : (
				<div>
					{getStepContent(activeStep)}
					<div
						style={{
							marginTop: '2rem',
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<Button disabled={activeStep === 0} onClick={handleBack}>
              Back
						</Button>
						<div>
							{activeStep < steps.length - 1 && (
								<Button
									variant="contained"
									color="primary"
									onClick={handleNext}
								>
                  Next
								</Button>
							)}
							{activeStep === steps.length - 1 && (
							// eslint-disable-next-line no-undef
								<Button
									variant="contained"
									color="primary"
									onClick={handleSubmit}
								>
                  Submit
								</Button>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export { RegistrationForm };
