import React, { useEffect, useState } from "react";
import { Button, Modal, Select, Input, message } from "antd";
import { update_ticket_status_thunk } from "../../../../redux/tickets-thunk";
import store from "@/app/store/store";
import { get_it_thunk } from "../../../../../it/redux/it-thunk";
import { useSelector } from "react-redux";
const { TextArea } = Input;

export default function AdminTicketChangeStatusSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const { users } = useSelector((state) => state.it);
  const { user } = useSelector((state) => state.app);
  console.log('useruser',user)
  const [data, setData] = useState({
      status: "Close ticket",
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
      store.dispatch(get_it_thunk());
  }, []);
  const showModal = () => {
      setIsModalOpen(true);
  };

  async function handleOk(params) {
      if (data.notes) {
          await store.dispatch(update_ticket_status_thunk(data));
          setData({
              status: "Close ticket",
              ticket_id: window.location.pathname.split("/")[3],
              assigned_to: users[0],
          });
          messageApi.success("Updated Success!");
          setIsModalOpen(false);
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
    <Button size="large" type="primary" onClick={showModal}>
        Update Ticket Status
    </Button>
    <Modal
        title="Update Ticket Status"
        open={isModalOpen}
        onOk={handleOk}
        okText="Submit"
        onCancel={handleCancel}
    >
        <div className="flex flex-col gap-4">
            <Select
                size="large"
                value={data.status}
                className="w-full"
                onChange={(e) =>
                    setData({
                        ...data,
                        status: e,
                    })
                }
                options={[
                    { value: "Close ticket", label: "Close Ticket" },
                    {
                        value: "Assigned",
                        label: "Transfer Ticket",
                    },
                    {
                        value: "Declined Ticket",
                        label: "Declined Ticket",
                    },
                ]}
            />
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
                    options={users.map((res) => ({
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
