import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useForm, Controller } from "react-hook-form";
import { useValorContext } from "../contexts/valorContext";
import BtnPagar from "./BtnPagar";

interface Valores {
    nome: string;
    cpf: string;
    numeroCartao: string;
    dataVenc: string;
    cvv: string;
    parcelas: string;
}

const FormComponent = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<Valores>({

    });

    const { atualizarValorEntrada } = useValorContext();

    const handleSelectParcela = (
        event: React.ChangeEvent<{value: unknown}>,
    ) => {
        const valorParcela = event.target.value as string;
        let valorEntrada = "";

        switch (valorParcela) {
            case "1x":
                valorEntrada = "15.300,00";
                break;
            case "2x":
                valorEntrada = "15.310,00";
                break;
            case "3x":
                valorEntrada = "15.450,000";
                break;
            case "4x":
                valorEntrada = "15.750,00";
                break;
            case "5x":
                valorEntrada = "15.849,99";
                break;
            case "6x":
                valorEntrada = "15.900,01";
                break;
            default:
                valorEntrada = "15.300,00";
        }

        atualizarValorEntrada(valorEntrada);
        setValue("parcelas", valorParcela)

        console.log("ValorEntrada: ", valorEntrada);
    };

    const onSubmit = (data: Valores) => {
        console.log(data);
    };

    const formatCPF = (value: string) => {
        const cleaned = value.replace(/\D/g, "");

        const formated = cleaned.replace(
            /(\d{3})(\d{3})(\d{3})(\d{2})/,
            "$1.$2.$3-$4"
        );

        return formated.slice(0, 14);
    };

    const handleCPFChange = (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        const value = formatCPF(event.target.value);
        event.target.value = value;
    };

    const formatCvv = (value: string) => {
        const cleaned = value.replace(/\D/g, "");

        const formated = cleaned.replace(/(\d{3})/, "$1");

        return formated.slice(0, 3);
    };

    const handleCvvChange = (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        const value = formatCvv(event.target.value);
        event.target.value = value;
    };

    const formatDtVenc = (value: string) => {
        const cleaned = value.replace(/\D/g, "");

        const formated = cleaned.replace(/(\d{2})(\d{4})/, "$1/$2");

        return formated.slice(0, 7);
    };

    const handleDtVencChange = (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        const value = formatDtVenc(event.target.value);
        event.target.value = value;
    };

    const formatNumCartao = (value: string) => {
        const cleaned = value.replace(/\D/g, "");

        const formatted = cleaned.replace(/(\d{4})(?=\d)/g, "$1 ");

        return formatted.slice(0, 19);
    };

    const handleNumCartaoChange = (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        const value = formatNumCartao(event.target.value);
        event.target.value = value;
    };

    return (
        <Box
            component="form"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "85vw",
                "& .MuiTextField-root": { m: 1 },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Controller
                name="nome"
                control={control}
                rules={{ required: "Nome completo é obrigatório" }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        fullWidth
                        required
                        label="Nome completo"
                        error={!!errors.nome}
                        helperText={errors.nome ? errors.nome.message : ""}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "&.Mui-focused fieldset": {
                                    borderColor: "#03D69D",
                                },
                            },
                            "& .MuiInputLabel-root": {
                                "&.Mui-focused": {
                                    color: "#03D69D",
                                },
                            },
                        }}
                    />
                )}
            />
            <Controller
                name="cpf"
                control={control}
                rules={{
                    required: "CPF é obrigatório",
                    pattern: {
                        value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                        message: "O CPF deve estar no formato correto",
                    },
                }}
                render={({ field }) => (
                    <TextField
                        fullWidth
                        {...field}
                        required
                        label="CPF"
                        error={!!errors.cpf}
                        helperText={errors.cpf ? errors.cpf.message : ""}
                        onChange={(e) => {
                            handleCPFChange(e);
                            field.onChange(e);
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "&.Mui-focused fieldset": {
                                    borderColor: "#03D69D",
                                },
                            },
                            "& .MuiInputLabel-root": {
                                "&.Mui-focused": {
                                    color: "#03D69D",
                                },
                            },
                        }}
                    />
                )}
            />

            <Controller
                name="numeroCartao"
                control={control}
                rules={{
                    required: "Número do cartão é obrigatório",
                    pattern: {
                        value: /^\d{4} \d{4} \d{4} \d{4}$/,
                        message: "Número do cartão inválido",
                    },
                }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        fullWidth
                        required
                        label="Número do cartão"
                        error={!!errors.numeroCartao}
                        helperText={
                            errors.numeroCartao
                                ? errors.numeroCartao.message
                                : ""
                        }
                        onChange={(e) => {
                            handleNumCartaoChange(e);
                            field.onChange(e);
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "&.Mui-focused fieldset": {
                                    borderColor: "#03D69D",
                                },
                            },
                            "& .MuiInputLabel-root": {
                                "&.Mui-focused": {
                                    color: "#03D69D",
                                },
                            },
                        }}
                    />
                )}
            />

            <Box
                sx={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "center",
                    width: "100%",
                }}
            >
                <Controller
                    name="dataVenc"
                    control={control}
                    rules={{
                        required: "Data de vencimento é obrigatória",
                        pattern: {
                            value: /^\d{2}\/\d{4}$/,
                            message:
                                "A data de venciemnto deve estar no formato MM/AAAA",
                        },
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            fullWidth
                            required
                            label="Vencimento"
                            type="text"
                            error={!!errors.dataVenc}
                            helperText={
                                errors.dataVenc ? errors.dataVenc.message : ""
                            }
                            onChange={(e) => {
                                handleDtVencChange(e);
                                field.onChange(e);
                            }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#03D69D",
                                    },
                                },
                                "& .MuiInputLabel-root": {
                                    "&.Mui-focused": {
                                        color: "#03D69D",
                                    },
                                },
                            }}
                        />
                    )}
                />
                <Controller
                    name="cvv"
                    control={control}
                    rules={{
                        required: "CVV é obrigatório",
                        pattern: {
                            value: /^\d{3}$/,
                            message: "CVV inválido",
                        },
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="outlined-number"
                            label="CVV"
                            type="text"
                            error={!!errors.cvv}
                            helperText={errors.cvv ? errors.cvv.message : ""}
                            onChange={(e) => {
                                handleCvvChange(e);
                                field.onChange(e);
                            }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#03D69D",
                                    },
                                },
                                "& .MuiInputLabel-root": {
                                    "&.Mui-focused": {
                                        color: "#03D69D",
                                    },
                                },
                            }}
                        />
                    )}
                />
            </Box>

            <Controller
                name="parcelas"
                control={control}
                rules={{
                    required: "Selecione o número de parcelas",
                }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        id="outlined-select-parcelas"
                        select
                        required
                        label="Parcelas"
                        error={!!errors.parcelas}
                        helperText={
                            errors.parcelas
                                ? errors.parcelas.message
                                : ""
                        }
                        fullWidth
                        onChange={handleSelectParcela}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "&.Mui-focused fieldset": {
                                    borderColor: "#03D69D",
                                },
                            },
                            "& .MuiInputLabel-root": {
                                "&.Mui-focused": {
                                    color: "#03D69D",
                                },
                            },
                        }}
                    >
                        <MenuItem value="1x">1x de R$ 15.300,00</MenuItem>
                        <MenuItem value="2x">2x de R$ 7.655,00</MenuItem>
                        <MenuItem value="3x">3x de R$ 5.150,00</MenuItem>
                        <MenuItem value="4x">4x de R$ 3.937,50</MenuItem>
                        <MenuItem value="5x">5x de R$ 3.169,99</MenuItem>
                        <MenuItem value="6x">6x de R$ 2.650,00</MenuItem>
                    </TextField>
                )}
            />

            <BtnPagar />
        </Box>
    );
};


export default FormComponent;