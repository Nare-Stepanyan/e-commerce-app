import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../components/app/hook";
import { userSelector } from "../../store/users/user-selector";
import Input from "../../components/input";
import { User } from "../../type";
import { setUser } from "../../store/users/user-slice";
import styles from "./profile.module.scss";
import Button from "../../components/button";

const Profile = () => {
  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();
  const [isEdited, setIsEdited] = useState(true);
  const [profileData, setProfileData] = useState<User>({
    id: "",
    firstName: "",
    lastName: "",
    imageUrl: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (user) {
      setProfileData(user);
    }
  }, [user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setIsEdited(false);
  };

  const onSave = () => {
    dispatch(setUser({ ...user, ...profileData }));
    setIsEdited(true);
  };
  const onCancel = () => {
    setProfileData(user as User);
    setIsEdited(true);
  };

  return (
    <div className={styles.form}>
      <h2>Personal Details</h2>
      <Input
        type="text"
        placeholder="First Name"
        name="firstName"
        required
        value={profileData?.firstName || ""}
        onChange={handleInputChange}
      />

      <Input
        type="text"
        placeholder="Last Name"
        name="lastName"
        required
        value={profileData?.lastName || ""}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        placeholder="Email"
        name="email"
        required
        value={user?.email || ""}
        onChange={handleInputChange}
        disabled={true}
      />
      <Input
        type="text"
        placeholder="Phone"
        name="phone"
        required
        value={profileData?.phone || ""}
        onChange={handleInputChange}
      />
      <div className={styles.buttons}>
        <Button
          label="Cancel"
          disabled={!isEdited}
          onClick={onCancel}
          className={`--color-dark ${isEdited ? styles.disabledButton : ""}`}
        />
        <Button
          label="Save changes"
          disabled={!isEdited}
          onClick={onSave}
          className={`--color-success ${isEdited ? styles.disabledButton : ""}`}
        />
      </div>
    </div>
  );
};

export default Profile;
