'use client'


import { ReactElement } from "react";

function Button({ onClick, children }: { onClick: any, children: ReactElement }) {
    return (
        <button onClick={onClick}>
            { children }
        </button>
    )
}

function PlayButton({ name }: { name: string }) {
    function handlePlayClick() {
        alert(`正在播放${name}`)
    }
    return (
        <Button onClick={handlePlayClick}>
            <div>{`播放${name}`}</div>
        </Button>
    )
}

function UploadButton({ name }: { name: string }) {
    return (
        <Button onClick={() => alert(`上传${name}`)}>
            <div>{`上传${name}`}</div>
        </Button>
    )
}

export default function MyApp() {
    return (
        <>
            <PlayButton name={'星际牛仔'} />
            <UploadButton name={'文件'} />
        </>
    )
}