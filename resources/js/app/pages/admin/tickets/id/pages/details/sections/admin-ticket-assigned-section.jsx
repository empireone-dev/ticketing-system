import React, { useEffect, useState } from "react";
import { Button, Modal, Select, Input, message } from "antd";
import { get_ticket_by_id_thunk, update_ticket_status_thunk } from "../../../../redux/tickets-thunk";
import store from "@/app/store/store";
import { get_it_thunk, get_user_by_position_thunk } from "../../../../../it/redux/it-thunk";
import { useSelector } from "react-redux";
const { TextArea } = Input;

export default function AdminTicketAsssignedSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const { users } = useSelector((state) => state.it);
  const { user } = useSelector((state) => state.app);

  const [data, setData] = useState({
      status: "Assigned",
      user_id:user?.id,
      ticket_id: window.location.pathname.split("/")[3],
      assigned_to: users[0]?.id,
  });
  useEffect(() => {
      setData({
          ...data,
          user_id:user?.id,
          assigned_to: users[0]?.id,
      });
  }, [data.status]);

  useEffect(() => {
    store.dispatch(get_user_by_position_thunk(2));
  }, []);
  const showModal = () => {
      setIsModalOpen(true);
  };

  async function handleOk(params) {
      if (data.notes) {
          await store.dispatch(update_ticket_status_thunk(data));
          await store.dispatch(get_ticket_by_id_thunk());
          messageApi.success("Updated Success!");
          
          setTimeout(() => {
            setIsModalOpen(false);
          }, 2000);
      } else {
          messageApi.error("Notes is required!");
      }
  }
  const handleCancel = () => {
      setIsModalOpen(false);
  };
  return (
    <div>
    {contextHolder}
    <Button size="large" type="primary"  danger onClick={showModal}>
        Assign Ticket
    </Button>
    <Modal
        title="Assign Ticket"
        open={isModalOpen}
        onOk={handleOk}
        okText="Submit"
        onCancel={handleCancel}
    >
        <div className="flex flex-col gap-4">
            {data.status == "Assigned" && (
                <Select
                    size="large"
                    value={data.assigned_to}
                    className="w-full"
                    onChange={(e) =>
                        setData({
                            ...data,
                            assigned_to: e,
                        })
                    }
                    options={users?.data?.map((res) => ({
                        value: res.id,
                        label: res.name,
                    }))}
                />
            )}
            <TextArea
                value={data.notes ?? ""}
                onChange={(e) =>
                    setData({
                        ...data,
                        notes: e.target.value,
                    })
                }
                placeholder="Notes"
                autoSize={{
                    minRows: 3,
                    maxRows: 5,
                }}
            />
        </div>
    </Modal>
</div>
  )
}
