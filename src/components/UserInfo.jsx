import { Card, CardContent, Typography } from "@material-ui/core";

const UserInfo = ({ data }) => {
    return (
        <Card style={{ margin: "16px" }}>
            <CardContent style={{ display: "flex", flexDirection: "column" }}>
                <aside>
                    <img
                        src={data.avatar}
                        style={{ maxWidth: "120px", borderRadius: "50%", margin: "0 20px 20px 0" }}
                        alt=""
                    />
                </aside>
                <main>
                    <Typography type="paragraph">
                        <strong>First name: </strong>
                        {data.firstName}
                    </Typography>
                    <Typography type="paragraph">
                        <strong>Last name: </strong>
                        {data.lastName}
                    </Typography>
                    <Typography type="paragraph">
                        <strong>Email: </strong>
                        {data.email}
                    </Typography>
                    <Typography type="paragraph">
                        <strong>Phone: </strong>
                        {data.phone}
                    </Typography>
                    <Typography type="paragraph">
                        <strong>Birtday: </strong>
                        {data.birthday}
                    </Typography>
                    <Typography type="paragraph">
                        <strong>About: </strong>
                        {data.about}
                    </Typography>
                </main>
            </CardContent>
        </Card>
    );
};

export default UserInfo;
