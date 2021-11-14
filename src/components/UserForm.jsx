import { Button, TextField, Card, CardContent, CardActions } from "@material-ui/core";
import { useFormik } from "formik";
import { useRef } from "react";
import { useNavigate } from "react-router";
import * as yup from "yup";

const validationSchema = yup.object({
    firstName: yup
        .string()
        .min(2, "First name should be of minimum 2 characters length")
        .required("First name is required"),
    lastName: yup
        .string()
        .min(2, "Last name should be of minimum 2 characters length")
        .required("Last name is required"),
    email: yup.string().email("Enter a valid email").required("Email is required"),
    phone: yup
        .string()
        .matches(/^(?=(?:\D*\d){9,})[0-9\s()+-]+$/, "Phone number is not valid")
        .required("Phone number is required"),
    birthday: yup.string().required("Birthday is required"),
    about: yup.string().min(20, "About should be of minimum 20 characters length").required("About is required")
});

const UserForm = ({ data, setData }) => {
    const navigate = useNavigate();
    const avatar = useRef(null);
    const formik = useFormik({
        initialValues: {
            firstName: data?.firstName || "",
            lastName: data?.lastName || "",
            email: data?.email || "",
            phone: data?.phone || "",
            birthday: data?.birthday || "",
            about: data?.about || "",
            avatar: ""
        },
        enableReinitialize: true,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            new Promise((resolve, reject) => {
                try {
                    const file = document.querySelector("#avatar")?.files[0];
                    const reader = new FileReader();

                    reader.readAsDataURL(file);
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = (error) => reject(error);
                } catch (error) {
                    reject(error);
                }
            })
                .then((file) => {
                    setData({ ...values, avatar: file });
                })
                .catch((e) => setData({ ...values, avatar: data?.avatar }))
                .finally(() => {
                    navigate("/info");
                });
        }
    });

    return (
        <Card style={{ margin: "16px" }}>
            <form onSubmit={formik.handleSubmit}>
                <CardContent
                    style={{
                        display: "grid",
                        gridGap: "8px"
                    }}
                >
                    <TextField
                        fullWidth
                        id="firstName"
                        name="firstName"
                        label="First name"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                    />
                    <TextField
                        fullWidth
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                    />
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        fullWidth
                        id="phone"
                        name="phone"
                        label="Phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
                    />
                    <TextField
                        fullWidth
                        type="date"
                        id="birthday"
                        name="birthday"
                        label="Birthday"
                        value={formik.values.birthday}
                        onChange={formik.handleChange}
                        error={formik.touched.birthday && Boolean(formik.errors.birthday)}
                        helperText={formik.touched.birthday && formik.errors.birthday}
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                    <TextField
                        fullWidth
                        id="about"
                        name="about"
                        label="About"
                        multiline={true}
                        value={formik.values.about}
                        onChange={formik.handleChange}
                        error={formik.touched.about && Boolean(formik.errors.about)}
                        helperText={formik.touched.about && formik.errors.about}
                    />
                    <TextField
                        ref={avatar}
                        fullWidth
                        type="file"
                        id="avatar"
                        name="avatar"
                        label="Avatar"
                        value={formik.values.avatar}
                        onChange={formik.handleChange}
                        error={formik.touched.avatar && Boolean(formik.errors.avatar)}
                        helperText={formik.touched.avatar && formik.errors.avatar}
                    />
                </CardContent>
                <CardActions>
                    <Button color="primary" variant="contained" fullWidth type="submit">
                        Submit
                    </Button>
                </CardActions>
            </form>
        </Card>
    );
};

export default UserForm;
