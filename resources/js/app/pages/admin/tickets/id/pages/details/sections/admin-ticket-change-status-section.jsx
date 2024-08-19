import React, { useEffect, useState } from "react";
import { Button, Modal, Select, Input, message } from "antd";
import { get_ticket_by_id_thunk, update_ticket_status_thunk } from "../../../../redux/tickets-thunk";
import store from "@/app/store/store";
import { get_it_thunk, get_user_by_position_thunk } from "../../../../../it/redux/it-thunk";
import { useSelector } from "react-redux";
const { TextArea } = Input;

export default function AdminTicketChangeStatusSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const { users } = useSelector((state) => state.it);
  const { user } = useSelector((state) => state.app);
  const [loading,setLoading] = useState(false)
  console.log('useruser',user)
  const [data, setData] = useState({
      status: "Closed",
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
    setLoading(true)
      if (data.notes) {
          await store.dispatch(update_ticket_status_thunk(data));
          setData({
              status: "Closed",
              ticket_id: window.location.pathname.split("/")[3],
              assigned_to: users[0],
          });
          messageApi.success("Updated Success!");
          store.dispatch(get_ticket_by_id_thunk());
          setIsModalOpen(false);
          setLoading(false)
      } else {
          messageApi.error("Notes is required!");
          setLoading(false)
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
        confirmLoading={loading}
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
                    // { value: "Assigned", label: "Assigned" },
                    { value: "Closed", label: "Closed Ticket" },
                    {
                        value: "Assigned",
                        label: "Transfer Ticket",
                    },
                    {
                        value: "Declined",
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
