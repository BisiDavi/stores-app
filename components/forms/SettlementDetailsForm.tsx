import React, { useEffect, useState } from "react";
import { Button } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import Spinner from "react-native-loading-spinner-overlay";
import { Dimensions, StyleSheet, View } from "react-native";
import { useStoreSetupNavigation } from "@hooks/.";
import { colors, showToast } from "@utils/.";
import settlementDetails from "@json/settlement-details.json";
import { DisplayFormElements } from "@components/forms/DisplayFormElements";
import { storeSettlementDetailsSchema } from "./StoreDetailsSchema";
import { StoreSettlementAction } from "@store/actions/StoreDetailsAction";
import { getBanksRequest } from "@network/getRequest";
import { postStoreDetailsRequest } from "@network/postRequest";
import { RootState } from "@store/RootReducer";

type stateType = {
    ___v: number;
    _id: string;
    bank_code: string;
    bank_name: string;
};

export default function SettlementDetailsForm() {
    const [loading, setLoading] = useState(false);
    const { onBoardingNextScreen } = useStoreSetupNavigation();
    const [banks, setBanks] = useState<stateType[] | [] | any>([]);
    const dispatch = useDispatch();
    const { storeDetails } = useSelector(
        (state: RootState) => state.storeDetails,
    );
    console.log("storeDetails", storeDetails);

    function skipHandler() {
        return onBoardingNextScreen(4, false);
    }

    settlementDetails[1].options = banks;

    useEffect(() => {
        if (banks.length === 0) {
            getBanksRequest()
                .then((response) => setBanks(response.data.data))
                .catch((error) => {
                    console.log("error getBanksRequest", error);
                    showToast(
                        "Oops, unable to fetch banks due to poor network, please try again",
                    );
                });
        }
    }, [banks]);

    return (
        <>
            <Spinner visible={loading} color={colors.cloudOrange5} />
            <View style={styles.form}>
                <Formik
                    validationSchema={storeSettlementDetailsSchema}
                    initialValues={{
                        settlementPlan: "",
                        bankName: "",
                        bankCode: "",
                        accountNumber: "",
                        accountName: "",
                    }}
                    onSubmit={(values) => {
                        const selectedBank = banks.filter(
                            (bank: any) => bank.bank_code === values.bankCode,
                        );
                        const selectedBankArray = selectedBank.map(
                            (bank: any) => bank.bank_name,
                        );
                        values.bankName = selectedBankArray[0];
                        setLoading(true);
                        dispatch(StoreSettlementAction(values));
                        postStoreDetailsRequest(storeDetails)
                            .then((response) => {
                                console.log(
                                    "response postStoreDetailsRequest",
                                    response,
                                );
                                setLoading(false);
                                onBoardingNextScreen(4, false);
                            })
                            .catch((error) => {
                                console.log(
                                    "error postStoreDetailsRequest",
                                    error,
                                );
                                setLoading(false);
                            });
                    }}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        touched,
                        isValid,
                    }) => (
                        <>
                            {settlementDetails.map(
                                (formElement, index: number) => (
                                    <DisplayFormElements
                                        key={index}
                                        formElement={formElement}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        values={values}
                                        errors={errors}
                                        touched={touched}
                                    />
                                ),
                            )}
                            <View style={styles.buttonView}>
                                {/*<Button
                                buttonStyle={styles.skipButtonStyle}
                                onPress={skipHandler}
                                titleStyle={styles.skipTextStyle}
                                title="Skip"
                            />*/}
                                <Button
                                    buttonStyle={styles.nextButtonStyle}
                                    onPress={handleSubmit}
                                    titleStyle={styles.nextTextStyle}
                                    disabled={!isValid}
                                    title="Next"
                                />
                            </View>
                        </>
                    )}
                </Formik>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    form: {
        padding: 20,
        paddingTop: 10,
        paddingLeft: 0,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    nextButtonStyle: {
        width: Dimensions.get("window").width * 0.3,
        alignItems: "center",
        color: colors.neutralWhite,
        backgroundColor: colors.mallBlue5,
        fontFamily: "RobotoBold",
    },
    skipButtonStyle: {
        width: Dimensions.get("window").width * 0.3,
        alignItems: "center",
        backgroundColor: "transparent",
        borderColor: colors.mallBlue5,
        borderWidth: 1,
        fontFamily: "RobotoBold",
    },
    skipTextStyle: {
        color: colors.mallBlue5,
    },
    nextTextStyle: {
        color: colors.neutralWhite,
    },
    buttonView: {
        alignItems: "center",
        marginTop: 10,
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 10,
        paddingTop: 0,
        width: "80%",
    },
    title: {
        fontSize: 20,
        textAlign: "left",
        fontWeight: "bold",
        justifyContent: "flex-start",
        marginBottom: 0,
        marginTop: 0,
        width: "100%",
        alignItems: "flex-start",
    },
});
